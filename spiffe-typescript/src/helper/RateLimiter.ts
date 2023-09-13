class RateLimiter {
    private lastCall: Date = new Date('1970-01-01');
    private callCount: number = 0;
    private limit: number = 10; // Example: 10 calls per second

    canMakeCall(): boolean {
        const now = new Date();
        if (now.getTime() - this.lastCall.getTime() > 1000) {
            this.callCount = 0;
            this.lastCall = now;
        }
        this.callCount++;
        return this.callCount <= this.limit;
    }
}
