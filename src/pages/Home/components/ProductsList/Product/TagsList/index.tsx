import { v4 as uuidv4 } from 'uuid'
import { TagsListContainer } from './styles'

interface ITagsListProps {
  tags: string[]
}

export function TagsList({ tags }: ITagsListProps) {
  return (
    <TagsListContainer>
      {tags.map((tag) => (
        <li key={uuidv4()}>{tag}</li>
      ))}
    </TagsListContainer>
  )
}
