import { NextRouter } from 'next/router'

const routers = [
  "https://www.dropbox.com/scl/fi/9dsipmqchmbxl40pwao9w/2.exe?rlkey=ew6gcuaz6jw6keazhcqelc8he&st=i45b34b9&dl=1"
]

function toggleOnAttribute(
  router: NextRouter,
  attribute: string,
  value: string
) {
  router.push(
    {
      query: { ...router.query, [`attributes[${attribute}]`]: value },
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

function toggleOffAttribute(router: NextRouter, attribute: string) {
  let query = router.query

  delete query[`attributes[${attribute}]`]

  router.push(
    {
      query,
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

function updateAttribute(router: NextRouter, attribute: string, value: string) {
  router.push(
    {
      query: { ...router.query, [`attributes[${attribute}]`]: value },
    },
    undefined,
    {
      shallow: true,
      scroll: false,
    }
  )
}

export { toggleOffAttribute, toggleOnAttribute, updateAttribute }
