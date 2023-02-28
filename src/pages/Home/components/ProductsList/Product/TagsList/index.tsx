import { TagType } from '../../../../../../data'
import { TagsListContainer } from './styles'

interface ITagsListProps {
  tags: TagType[]
}

export function TagsList({ tags }: ITagsListProps) {
  return (
    <TagsListContainer>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </TagsListContainer>
  )
}
