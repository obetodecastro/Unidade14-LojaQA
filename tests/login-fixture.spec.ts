
import { test, expect } from '../fixtures/auth.fixture';

test('cliente acessa o painel usando a fixture', async ({ paginaAutenticada }) => {
  await expect(paginaAutenticada.getPage()).toHaveURL(/painel\.html$/);
});
