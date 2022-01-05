import { fauna } from '../../../src/services/fauna'
import { query as q } from 'faunadb'

type createUserProps = {
  name: string,
  password: string,
}

export const createUser = function ({ name, password }: createUserProps) {
  fauna.query(
    q.Create(
      q.Collection('bookplay'),
      {
        data: {
          userName: { name },
          password: { password },
        }
      }
    )
  )
}
