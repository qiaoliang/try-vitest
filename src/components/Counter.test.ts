import { mount } from "@vue/test-utils";
import { describe, expect, test, it } from "vitest";
import { nextTick, ref } from "vue";
import CountVue from "./Count.vue";

function factory() {
    return mount(CountVue)
}
describe('App', () => {
    it('render count when even', async () => {
        const wrapper = factory()
        await wrapper.find('button').trigger('click')
        await wrapper.find('button').trigger('click')
        
        expect(wrapper.html()).toContain('Count: 2. Count is even.')
    })
    it('render count when odd', async () => {
        const wrapper = factory()
        await wrapper.find('button').trigger('click')
        expect(wrapper.html()).toContain('Count: 1. Count is odd.')
    })
})