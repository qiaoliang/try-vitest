import { mount } from "@vue/test-utils";
import { describe, expect, test, it } from "vitest";

const app = {
    data() {
        return {
            count: 0
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

function factory({ data }) {
    return mount(app, {
        data(){
            return data
        }
    })
}
describe('App', () => {
    it('render count when odd', () => {
        const wrapper = factory({
            data: {
                count: 1
            }

        })
        console.log(wrapper.vm);
        expect(wrapper.html()).toContain('Count: 1. Count is odd.')
    })
    it('render count when even', () => {
        const wrapper = factory({
            data: {
                count: 2
            }
        })
        expect(wrapper.html()).toContain('Count: 2. Count is even.')
    })
})