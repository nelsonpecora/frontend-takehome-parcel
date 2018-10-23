import GemSection from './gem-section';

describe('GemSection', () => {
  test('renders', () => {
    const wrapper = shallowMount(GemSection, {
      propsData: {
        title: 'My Title',
        list: []
      }
    });

    expect(wrapper.html()).toContain('<h2 class="section-title">My Title</h2>');
    expect(wrapper.html()).toContain('<searchform-stub'); // shown by default
    expect(wrapper.html()).toContain('class="section-body"'); // shown by default
    expect(wrapper.html()).toContain('no-gems'); // shown when list is empty
  });

  test('shows collapse button when defined', () => {
    const wrapper = shallowMount(GemSection, {
      propsData: {
        list: [],
        collapse: true
      }
    });

    expect(wrapper.html()).toContain('section-collapse-button');
    expect(wrapper.html()).not.toContain('<searchform-stub');
  });

  test('hides list when collapse button is clicked', () => {
    const wrapper = shallowMount(GemSection, {
      propsData: {
        list: [],
        collapse: true
      }
    });

    expect(wrapper.vm.isExpanded).toBe(true);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.isExpanded).toBe(false);
  });
});
