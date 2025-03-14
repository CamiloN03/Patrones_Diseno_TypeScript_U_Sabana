import { logColor } from "../../../utils/colors";

const banner = `
  '================================================'
  ' 03. Integracion de un Sistema de Pago Externo! '
  '================================================'
  'Patron de diseño:' Patron Estructural Adapter   '
  '================================================'
`;

export const printBanner = () => logColor(banner, 'bgGreen');