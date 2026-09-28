// Used by GitHub Actions to prevent Atlas M0 pause and Brevo API key inactivity.

const BREVO_ACCOUNT_URL = 'https://api.brevo.com/v3/account';

const requireEnv = (name: string): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
};

const pingBrevo = async (apiKey: string): Promise<void> => {
  const response = await fetch(BREVO_ACCOUNT_URL, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      `Brevo account request failed: ${response.status} ${response.statusText}. ${detail}`
    );
  }

  console.log('Brevo: account API OK');
};

const main = async (): Promise<void> => {
  const brevoApiKey = requireEnv('BREVO_API_KEY');

  await pingBrevo(brevoApiKey);
};

main().catch((error: unknown) => {
  console.error('Keep-alive failed:', error);
  process.exit(1);
});
