import { Selector } from 'testcafe';

fixture`Example page`
  .page`https://www.getninjas.com.br/design-e-tecnologia/desenvolvimento-de-sites-e-sistemas`;

// test('Checking title', async t => {
//   const title = await t.eval(() => window.document.title);
//   await t.expect(title).eql('Precisando de Desenvolvedores de Sites? | GetNinjas');
// });

// test('Checking H1', async t => {
//   const h1 = await Selector('.page-title');
//   await t.expect(h1.innerText).eql(`Os melhores Desenvolvedores de Sites.\nFaça um pedido. Receba orçamentos. Contrate o melhor.\n`);
// });


test('Fill form', async t => {
  const element = Selector((index) => {
    return document.querySelectorAll('select.form__input')[index];
  });

  const option = Selector((index, z) => {
    return document.querySelectorAll('select.form__input')[index].querySelectorAll('option')[z];
  });

  await t.click(element(0)).
    click(option(0, 1)).
    click(element(1)).
    click(option(1, 1)).
    click(element(2)).
    click(option(2, 1)).
    click('.next .btn');

  const requestFields = await Selector('.form__container.inputs:not(.user)');
  await t.expect(requestFields.getStyleProperty('display')).eql('none');

});