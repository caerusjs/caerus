import { defineFeature, loadFeature } from 'jest-cucumber';
import 'expect-puppeteer';

const feature = loadFeature('./features/viewing-components.feature');

defineFeature(feature, (test) => {
  test('Landing on the home page', ({ when, then }) => {
    when('I land on the home page', async () => {
      await page.goto('http://localhost:4444/', { waitUntil: 'networkidle2' });
    });
    then('I can see a list of compenents', async () => {
      await expect(page).toMatch('Anchor');
    });
  });

  test('Viewing an atom', ({ given, when, then }) => {
    given('I have landed on the homepage', async () => {
      await page.goto('http://localhost:4444/', { waitUntil: 'networkidle2' });
    });

    when('I click on an atom', async () => {
      await expect(page).toClick('a', { text: 'Paragraph' });
    });

    then('I can see the atom on the screen', async () => {
      await expect(page).toMatchElement('p');
    });
  });

  test('Viewing a molecule', ({ given, when, then }) => {
    given('I have landed on the homepage', async () => {
      await page.goto('http://localhost:4444/', { waitUntil: 'networkidle2' });
    });

    when('I click on a molecule', async () => {
      await expect(page).toClick('a', { text: 'InputButton' });
    });

    then('I can see the molecule on the screen', async () => {
      await page.waitFor('input');
      await expect(page).toMatchElement('input');
      await expect(page).toMatchElement('button');
    });
  });

  test('Viewing an organism', ({ given, when, then }) => {
    given('I have landed on the homepage', async () => {
      await page.goto('http://localhost:4444/', { waitUntil: 'networkidle2' });
    });

    when('I click on an organism', async () => {
      await expect(page).toClick('a', { text: 'PageCallToAction' });
    });

    then('I can see the organism on the screen', async () => {
      await page.waitFor('svg');
      await expect(page).toMatchElement('a');
      await expect(page).toMatchElement('h2');
      await expect(page).toMatchElement('svg');
      await expect(page).toMatchElement('p');
    });
  });
});
