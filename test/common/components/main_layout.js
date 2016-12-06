import MainLayout from '../../../src/components/main_layout';
import { renderToString } from 'react-dom/server';

describe('MainLayout', () => {
  let context;

  beforeEach(() => {
    context = {
      location: {
        hash: "#/"
      }
    };
  });

  it('renders the footer', () => {
    renderToString(MainLayout(null, context)).should.containEql('footer');
  });
});
