import { registerEnumType } from '@nestjs/graphql';

export enum PermissionOperation {
    CREATE = "CREATE",
    READ = "READ",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}


registerEnumType(PermissionOperation, { name: 'PermissionOperation', description: undefined })
