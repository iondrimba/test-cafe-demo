import { Selector } from 'testcafe';

fixture`Example page`
  .page`https://iondrimbafilho.me/`;

test('Expect to navigate to about', async t => {
  await t.click('.link');
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).eql('/about');
});


test('About page to have class animate', async t => {
  await t.click('.link');
  const about = await Selector('.about');
  await t.expect(about.hasClass('animate')).eql(true);
});


test('Navigates to about page and click on close', async t => {
  await t.navigateTo('/about');
  await t.click('.close');
  const location = await t.eval(() => window.location);
  await t.expect(location.pathname).eql('/');
});

test('3D Grid should be invisible', async t => {
  await t.resizeWindow(400, 600);
  const grid = await Selector('.grid3d');
  await t.expect(grid.getStyleProperty('display')).eql('none');
});