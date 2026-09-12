import { mount, VueWrapper } from "@vue/test-utils";
import ArticleCard from "@/Composables/articleCard.vue";
import { expect, test, describe, beforeEach } from "vitest";

describe("Testing articleCard", () => {
  let wrapper: VueWrapper;
  let exampleHTML: string;
  let selectedAt: string;
  let unSelectedAt: string;

  beforeEach(() => {
    exampleHTML = "<h1>This is a test</h1><p>Do you like this test?</p>";

    selectedAt = "selected";
    unSelectedAt = "unselected";
    wrapper = mount(ArticleCard, {
      props: {
        content: exampleHTML,
        selected: false,
      },
    });
  });

  test("articleCard contains inputted HTML", () => {
    expect(wrapper.html()).toContain("<h1>This is a test</h1>");
    expect(wrapper.html()).toContain("<p>Do you like this test?</p>");
  });

  test("articleCard is small when unselected", () => {
    expect(wrapper.classes()).toContain(unSelectedAt);
    expect(wrapper.classes()).not.toContain(selectedAt);
  });

  test("articleCard is large when selected", async () => {
    await wrapper.setProps({ selected: true });
    expect(wrapper.classes()).toContain(selectedAt);
    expect(wrapper.classes()).not.toContain(unSelectedAt);
  });

  test("articleCard can dynamicly change size, when selected, then unselected", async () => {
    expect(wrapper.classes()).toContain(unSelectedAt);
    expect(wrapper.classes()).not.toContain(selectedAt);

    await wrapper.setProps({ selected: true });

    expect(wrapper.classes()).toContain(selectedAt);
    expect(wrapper.classes()).not.toContain(unSelectedAt);

    await wrapper.setProps({ selected: false });

    expect(wrapper.classes()).toContain(unSelectedAt);
    expect(wrapper.classes()).not.toContain(selectedAt);
  });

  test("articleCard emits click event when clicked", async () => {
    await wrapper.trigger("click");
    expect(wrapper.emitted("select")).toHaveLength(1);
  });
});
