
import { mount, VueWrapper } from '@vue/test-utils'
import { http,HttpResponse } from 'msw'
import  Article  from '@/Composables/article.vue'
import { 
        expect,
        test, 
        describe, 
        beforeEach,
        afterEach
} from 'vitest'




describe("Testing article", () => {
    let wrapper: VueWrapper;
    const mockEndPoint = '/articles/test?start=1&end=10';
    const mockArticles = {
        '1': { 
             'date': 123,
             'body': 'This is article 1.'
         }, '2': { 
             'date': 123,
             'body': 'This is article 2.'
         }, '3': { 
             'date': 123,
             'body': 'This is article 3.'
         }, '4': { 
             'date': 123,
             'body': 'This is article 4.'
         }, '5': { 
             'date': 123,
             'body': 'This is article 5.'
         }, '6': { 
             'date': 123,
             'body': 'This is article 6.'
         }, '7': { 
             'date': 123,
             'body': 'This is article 7.'
         }, '8': { 
             'date': 123,
             'body': 'This is article 8.'
         }, '9': { 
             'date': 123,
             'body': 'This is article 9.'
         }, '10': { 
             'date': 123,
             'body': 'This is article 10.'
         },
    } as const;

    //This is mocking the out going response
    http.get('/articles/test', ({ request }) => {
        const url = new URL(request.url);

        const start = url.searchParams.get('start');
        const end = url.searchParams.get('end');

        if (!start || !end) {
            return new HttpResponse(null, { status: 404});
        }

        //Very annoying
        return HttpResponse.json();
    });

    beforeEach(() => {

        wrapper = mount(Article, {
            props: {
                route: mockEndPoint,
            } 
        });


    });

    afterEach(() => {

    });


    test("Can contstruct 10 article cards when given enough.", () => {

    });
    
    test("Will construct as many article cards as it can.", () => {

    });

    test("Will keep track of the actively selected card.", () => {

    });

    test("Deselects cards that aren't actively clicked on.", () => {

    });

});
