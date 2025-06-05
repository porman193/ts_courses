export interface Driver{
    dataBase: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void; // Optional method
}

class PostgresDriver implements Driver {
    dataBase: string;
    password: string;
    port: number;

    constructor(dataBase: string, password: string, port: number) {
        this.dataBase = dataBase;
        this.password = password;
        this.port = port;
    }
    disconnect(): void {
        console.log(`Disconnecting from PostgreSQL database ${this.dataBase}`);
    }

    connect(): void {
        console.log(`Connecting to PostgreSQL database ${this.dataBase} on port ${this.port}`);
    }
}

class OracleDriver implements Driver {
    dataBase: string;
    password: string;
    port: number;

    constructor(dataBase: string, password: string, port: number) {
        this.dataBase = dataBase;
        this.password = password;
        this.port = port;
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }

    connect(): void {
        console.log(`Connecting to Oracle database ${this.dataBase} on port ${this.port}`);
    }
}

class MySQLDriver implements Driver {
    dataBase: string;
    password: string;
    port: number;

    constructor(dataBase: string, password: string, port: number) {
        this.dataBase = dataBase;
        this.password = password;
        this.port = port;
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }

    connect(): void {
        console.log(`Connecting to MySQL database ${this.dataBase} on port ${this.port}`);
    }
}