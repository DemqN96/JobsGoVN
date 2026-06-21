const KEYCRM_BASE = 'https://openapi.keycrm.app/v1';

export interface KeyCrmLead {
  name: string;
  phone: string;
  country?: string | null;
  comment?: string | null;
  source?: string | null;
}

/**
 * Створює картку у KeyCRM (POST /pipelines/cards).
 * Не кидає виняток — повертає { ok, id?, error? }, щоб збій CRM
 * не блокував збереження ліда в локальній БД.
 */
export async function pushLeadToKeyCrm(lead: KeyCrmLead): Promise<{
  ok: boolean;
  id?: number;
  error?: string;
}> {
  const apiKey = process.env.KEYCRM_API_KEY;
  if (!apiKey) {
    return { ok: false, error: 'KEYCRM_API_KEY is not set' };
  }

  const pipelineId = Number(process.env.KEYCRM_PIPELINE_ID || 1);
  const statusId = Number(process.env.KEYCRM_STATUS_ID || 1);
  const sourceId = Number(process.env.KEYCRM_SOURCE_ID || 20);

  const titleParts = [lead.name, lead.country].filter(Boolean).join(' · ');
  const title = `Сайт: ${titleParts || lead.phone}`;

  const payload: Record<string, unknown> = {
    title,
    pipeline_id: pipelineId,
    status_id: statusId,
    source_id: sourceId,
    contact: {
      full_name: lead.name,
      phone: lead.phone,
    },
  };

  if (lead.comment) {
    payload.description = lead.comment;
  }
  if (lead.country) {
    payload.note = `Бажана країна: ${lead.country}`;
  }

  try {
    const res = await fetch(`${KEYCRM_BASE}/pipelines/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('KeyCRM error', res.status, text);
      return { ok: false, error: `KeyCRM ${res.status}: ${text.slice(0, 200)}` };
    }

    const data = await res.json();
    return { ok: true, id: data?.id };
  } catch (err) {
    console.error('KeyCRM network error', err);
    return { ok: false, error: String(err) };
  }
}
