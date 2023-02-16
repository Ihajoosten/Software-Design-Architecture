export abstract class AbstractMessageSenderService {
    // Template method
    sendCustomerMessage(): void {
        let customerInfo = this.determineCustomerInfo();
        let generatedMessage = this.generateMessage(customerInfo);
        this.sendMessage(generatedMessage);
    }

    // Base operation
    protected determineCustomerInfo(): string {
        // TO-DO
        return "Luc";
    }

    // Base operation
    protected generateMessage(customerInfo: string): string {
        // TO-DO
        return "Here are your tickets, " + customerInfo;
    }

    // Required operation
    protected abstract sendMessage(message: string): void;
}