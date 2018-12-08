import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../user';

@Pipe ({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    
    transform(employees : User[] , searchTerm: string): User[] {
        if (!employees || !searchTerm) {
            return employees;
        }

        return employees.filter(employee =>
            employee.designation.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

}