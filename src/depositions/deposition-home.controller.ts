import { Controller, Get } from "@nestjs/common";
import { DepositionsService } from './depositions.service';

@Controller("depositions-home")
export class DepositionHomeController {
    constructor(private readonly depositionsService: DepositionsService) { }

    @Get()
    list() {
        return this.depositionsService.listDepositions();
    }
}