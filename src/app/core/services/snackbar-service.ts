import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })
export class SnackbarService {

    constructor(private _snackBar: MatSnackBar) { }

    openSnackBar(message: string, duration: number): void {
        this._snackBar.open(message, 'Close', {
            duration: duration * 1000,
        });
    }
}