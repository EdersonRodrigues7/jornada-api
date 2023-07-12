import { Controller, Get } from "@nestjs/common";
import { DepositionService } from './deposition.service';

@Controller("depositions-home")
export class DepositionHomeController {
    constructor(private readonly depositionService: DepositionService) { }

    @Get()
    list() {
        return this.depositionService.listDepositions();
    }
}