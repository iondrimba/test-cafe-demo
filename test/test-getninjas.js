import { Selector } from 'testcafe';

fixture`Getninjas Categoria`
  .page`https://www.getninjas.com.br/design-e-tecnologia/desenvolvimento-de-sites-e-sistemas`;

test('Checking title', async t => {
  const title = t.eval(() => window.document.title);
  await t.expect(title).eql('Precisando de Desenvolvedores de Sites? | GetNinjas');
});

test('Checking H1', async t => {
  const h1 = Selector('.page-title');
  await t.expect(h1.innerText).eql(`Os melhores Desenvolvedores de Sites.\nFaça um pedido. Receba orçamentos. Contrate o melhor.\n`);
});


test('Fill form', async t => {
  const element = Selector((index) => {
    return document.querySelectorAll('select.form__input')[index];
  });

  const option = element(0).find('option').nth(1);

  await t.click(element(0)).
    click(element(0).find('option').nth(1)).
    click(element(1)).
    click(element(1).find('option').nth(1)).
    click(element(2)).
    click(element(2).find('option').nth(1)).
    click('.next .btn');

  const requestFields = Selector('.form__container.inputs:not(.user)');
  await t.expect(requestFields.getStyleProperty('display')).eql('none');

});

test('Banner image should be invisible', async t => {
  await t.resizeWindow(400, 600);
  const bannerImage = await Selector('.header-banner__image');
  await t.wait(3000);
  await t.expect(bannerImage.getStyleProperty('display')).eql('none');
});