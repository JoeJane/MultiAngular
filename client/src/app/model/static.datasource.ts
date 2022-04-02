import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private surveys: Survey[] =
    [
        new Survey(1, 111, 111, 'title 1', 'desc 1', new Date(0)),
        new Survey(2, 222, 222, 'title 2', 'desc 2', new Date(0)),
        new Survey(3, 333, 333, 'title 3', 'desc 3', new Date(0)),
        new Survey(4, 444, 444, 'title 4', 'desc 4', new Date(0)),
        new Survey(5, 555, 555, 'title 5', 'desc 5', new Date(0))
    ];

    getSurveys(): Observable<Survey[]>
    {
        return from([this.surveys]);
    }
}