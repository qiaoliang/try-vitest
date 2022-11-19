import { mount } from "@vue/test-utils";
import { describe, expect, test, it } from "vitest";
import CountVue from "./Count.vue";
import { createStore } from 'vuex';

const createVueStore = () => {
    return createStore({
        state() {
            return {
                count: 0
            }
        },
        mutations: {
            increment(state) {
                state.count += 1
            }
        }
    })
}
function factory() {
    const store = createVueStore()
    return mount(CountVue, {
        global: {
            plugins: [store]
        }
    })
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