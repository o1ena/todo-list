import {Injectable, Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'todosFilter'
})
@Injectable()
export class TodosFilterPipe implements PipeTransform {
    transform(items: any[], status: string): any {
        if (!status) {
            return items;
        }
        return items.filter(item => item.status === status);
    }
}
