import { test, expect } from '@playwright/test';

test('list orders', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })

    await expect(page.getByRole('cell', { name: 'REX LTDA 0' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'REX LTDA 9' })).toBeVisible();
});

test('paginate orders', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Próxima página' }).click();
    await expect(page.getByRole('cell', { name: 'REX LTDA 10' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'REX LTDA 19' })).toBeVisible();
    await page.getByRole('button', { name: 'Última página' }).click();
    await expect(page.getByRole('cell', { name: 'REX LTDA 50' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'REX LTDA 59' })).toBeVisible();
});

test('filter by order', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })
    await page.getByPlaceholder('ID do Pedido').fill('order-1');
    await page.getByRole('button', { name: 'Filtrar Resultados' }).click();
    await expect(page.getByRole('cell', { name: 'REX LTDA 0' })).toBeVisible();
});

test('filter by customer name', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })
    await page.getByPlaceholder('Nome do Cliente').fill('REX LTDA 0');
    await page.getByRole('button', { name: 'Filtrar Resultados' }).click();
    await expect(page.getByRole('cell', { name: 'REX LTDA 0' })).toBeVisible();
});

test('filter by status', async ({ page }) => {
    await page.goto('/orders', { waitUntil: 'networkidle' })
    await page.getByRole('combobox').click();
    await page.getByLabel('Pendente').locator('span').first().click();
    await page.getByRole('button', { name: 'Filtrar Resultados' }).click();
    const tableRows = await page.getByRole('cell', {name: 'Pendente'});
    expect(tableRows).toHaveCount(10);    
});





