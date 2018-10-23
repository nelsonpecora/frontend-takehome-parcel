import Wrapper from './wrapper';

describe('Wrapper', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders', () => {
    const wrapper = shallowMount(Wrapper);

    expect(wrapper.html()).toContain('The Bountiful Hoard');
  });
});
