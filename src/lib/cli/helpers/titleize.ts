import { titleCase } from 'title-case'

export default (name: string) => titleCase(name).replace('-', '')