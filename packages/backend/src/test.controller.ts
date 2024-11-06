import {Controller, Get} from '@nestjs/common';

@Controller()
export class TestController {
    @Get()
    getTestData() {
        return {message: 'Hello, this is your test data!'};
    }
}
