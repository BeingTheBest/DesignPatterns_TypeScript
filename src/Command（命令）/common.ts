
//������
class Invoker {
    private command: Command;
    public constructor(command: Command) {
        this.command = command;
    }
    public setCommand(command: Command): void {
        this.command = command;
    }
    public call(): void {
        console.log("������ִ������command...");
        this.command.execute();
    }
}
//��������
interface Command {
    execute(): void;
}
//��������
class ConcreteCommand implements Command {
    private receiver: Receiver;
    constructor() {
        this.receiver = new Receiver();
    }
    public execute(): void {
        this.receiver.action();
    }
}
//������
class Receiver {
    public action(): void {
        console.log("�����ߵ�action()����������...");
    }
}

class Client {
    public static main(): void {
        const cmd: Command = new ConcreteCommand();
        const ir: Invoker = new Invoker(cmd);
        console.log("�ͻ����ʵ����ߵ�call()����...");
        ir.call();
    }
}
Client.main()


// �ͻ����ʵ����ߵ�call()����...
// ������ִ������command...
// �����ߵ�action()����������...