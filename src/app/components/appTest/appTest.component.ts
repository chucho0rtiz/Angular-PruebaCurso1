import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'appTest',
    templateUrl: './appTest.component.html',
    styleUrls: ['./appTest.component.css']
})

export class AppTestComponent implements OnInit {

    public pregunta: string;
    public respuestas: any[];
    public respuestaCor: boolean;
    public selectRes: boolean;

    constructor() {
        this.pregunta = '¿cual es la capital de Colombia?';
        this.respuestas = [
            {
                'respuestas': 'Antioquia',
                'correcta': false
            },
            {
                'respuestas': 'Bogota',
                'correcta': true
            },
            {
                'respuestas': 'Uraba',
                'correcta': false
            },
            {
                'respuestas': 'Caldas',
                'correcta': false
            }
        ];
        this.respuestaCor = false;
        this.selectRes = false;
    }

    ngOnInit() {
        
    }

    selectResIndex(index: any) {
        this.respuestaCor = this.respuestas[index].correcta;
        this.selectRes = true;
        console.log(this.respuestaCor)

    }

    // selectResObj(obj: any) {
    //     this.respuestaCor = obj.correcta;
    //     console.log(this.respuestaCor)
    // }

    selectResPreg() {
        if(!this.pregunta){
            return false;
        }

        if(!this.respuestas || !Array.isArray(this.respuestas)){
            return false;
        }else {
            if (!(this.respuestas.length>=2 && this.respuestas.length<=4)) {
                return false;
            }

            const corRes = this.respuestas.filter(respuestas => respuestas.correcta);

            if (corRes.length !== 1) {
                return false;
            }
        }
        return true;
    }

}