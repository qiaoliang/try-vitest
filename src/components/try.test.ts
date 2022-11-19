import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

const app = {
    props:{
        count:{
            type:Number
        }
    },
    template: `
    <button />  
        <div v-if="count %2 === 0">
            Count: {{count}}. Count is even.
        </div>
        <div v-if="count %2 !== 0">
            Count: {{count}}. Count is odd.
        </div>
    `,
}

function factory(props: Object) {
    return mount(app, {
        props
    })
}
describe('App', () => {
    test('render count when odd', () => {
        const wrapper = factory({ count: 1 })
        console.log(wrapper.vm);
        expect(wrapper.html()).toContain('Count: 1. Count is odd.')
    })
    test('render count when even', () => {
        const wrapper = factory({ count: 2 })
        expect(wrapper.html()).toContain('Count: 2. Count is even.')
    })
})