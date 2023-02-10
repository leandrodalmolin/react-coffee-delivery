import { v4 as uuidv4 } from 'uuid'
import { TagsListContainer } from './styles'

interface TagsListProps {
  tags: string[]
}

export function TagsList({ tags }: TagsListProps) {
  return (
    <TagsListContainer>
      {tags.map((tag) => (
        <li key={uuidv4()}>{tag}</li>
      ))}
    </TagsListContainer>
  )
}
