# Generate list of AWS accounts inside tampermonkey script
When you are using AWS SSO with multiple accounts it is problematic to generate dynamic list of all accounts.
## Features
- Using AWS Organization to generate list of accounts for tampermonkey script
- Auto-updating of tampermoneky script (when you have public link available)
- Auto-updating version after each run (to trigger tampermonkey update)
- Scheduled workflow via cron