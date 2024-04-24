import { test, expect } from '@playwright/test';

test('sign up successfuly', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
    await page.getByLabel('Seu nome').fill('Rex San')
    await page.getByLabel('Seu e-mail').fill('trex@ltda.com')
    await page.getByLabel('Seu celular').fill('99363852')
    await page.getByRole('button', { name: 'Finalizar Cadastro' }).click();

    const toast = page.getByText('Restaurante cadastrado com sucesso!');

    await expect(toast).toBeVisible();

});

test('sign up with wrong', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByLabel('Nome do estabelecimento').fill('Pizza Shoap')
    await page.getByLabel('Seu nome').fill('Rex San')
    await page.getByLabel('Seu e-mail').fill('trex@ltda.com')
    await page.getByLabel('Seu celular').fill('99363852')
    await page.getByRole('button', { name: 'Finalizar Cadastro' }).click();

    const toast = page.getByText('Erro ao cadastrar restaurante');

    await await expect(toast).toBeVisible();

});



test('navigate to new login page', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByRole('link', { name: 'Fazer Login' }).click();

    await expect(page.url()).toContain('/sign-in');
});

