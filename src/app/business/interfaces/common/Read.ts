interface Read<T> {
    retrieve: (callback: (error: any, result: T) => void) => void;
    findById: (callback: (error: any, result: T) => void) => void;
}

export = Read;