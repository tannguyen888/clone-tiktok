const searchApiUrl = process.env.REACT_APP_SEARCH_API_URL;

export async function search(keyword) {
    if (!searchApiUrl || !keyword.trim()) {
        return [];
    }

    try {
        const url = new URL(searchApiUrl);
        url.searchParams.set('q', keyword.trim());
        url.searchParams.set('type', 'more');

        const response = await fetch(url);

        if (!response.ok) {
            return [];
        }

        const result = await response.json();
        const accounts = Array.isArray(result) ? result : result.data;

        if (!Array.isArray(accounts)) {
            return [];
        }

        const normalizedKeyword = keyword.trim().toLowerCase();

        return accounts
            .filter(
                (account) =>
                    account.username?.toLowerCase().includes(normalizedKeyword) ||
                    account.name?.toLowerCase().includes(normalizedKeyword) ||
                    account.nickname?.toLowerCase().includes(normalizedKeyword) ||
                    account.full_name?.toLowerCase().includes(normalizedKeyword),
            )
            .map((account) => ({
                ...account,
                nickname: account.nickname || account.username,
                full_name: account.full_name || account.name,
                avatar: account.avatar || '',
                tick: Boolean(account.tick),
            }));
    } catch {
        return [];
    }
}
