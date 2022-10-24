// ==UserScript==
// @name     AWS SSO Displayname
// @version 3.2.225
// @grant    none
// @include      https://console.aws.amazon.*
// @include      https://*.console.aws.amazon.*
// ==/UserScript==

// Generated AWS accounts below
const accounts = {
"123456789012": ["XYZ"],
};

const NO_COLOR = null;

const extractRole = (displayName) => {
    return /(\w+)\/\w+/.exec(displayName)[1]
};

const getAccountInfo = (accountId) => {
    const [alias, color] = accounts[accountId] || [accountId, NO_COLOR];
    return { alias, color };
};

const accountId = document.querySelector(
    '[data-testid="account-detail-menu"] > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)'
).textContent.replace(/-/g, '');

console.debug({ accountId });
const { alias, color } = getAccountInfo(accountId);
const displayName = document.querySelector(
    '[data-testid="awsc-nav-account-menu-button"] > span:nth-child(1)'
).textContent;

console.debug({ displayName });
const role = extractRole(displayName);
console.debug({ role });
const dropdownHeader = document.querySelector(
    '[data-testid="awsc-nav-account-menu-button"] [title]'
);

switch (role) {
    case "Operator":
        dropdownHeader.innerHTML = `${alias}`;
        dropdownHeader.style.backgroundColor = "red";
        dropdownHeader.style.color = "white";
        dropdownHeader.style.fontSize = "10pt";
    case "AdministratorAccess":
        dropdownHeader.innerHTML = `${role}@${alias}`;
        dropdownHeader.style.backgroundColor = "blue";
        dropdownHeader.style.color = "white";
        dropdownHeader.style.fontSize = "10pt";
        break;
    default:
        dropdownHeader.style.backgroundColor = color;
        dropdownHeader.style.color = "white";
        dropdownHeader.style.fontSize = "10pt";
}
if (color !== NO_COLOR) {
    dropdownHeader.style.backgroundColor = color;
    dropdownHeader.style.color = "white";
    dropdownHeader.style.fontSize = "10pt";
}
