class ExpiringCache<T> {
    private cache: Map<string, { value: T, expiry: Date }>;

    constructor(private defaultExpiry: number = 60000) { // Default 1 minute
        this.cache = new Map();
    }

    set(key: string, value: T, expiry?: number) {
        const expiration = new Date(Date.now() + (expiry || this.defaultExpiry));
        this.cache.set(key, { value, expiry: expiration });
    }

    get(key: string): T | null {
        const item = this.cache.get(key);
        if (item && item.expiry > new Date()) {
            return item.value;
        }
        this.cache.delete(key);
        return null;
    }
}
