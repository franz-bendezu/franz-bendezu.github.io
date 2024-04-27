const TagListItem: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <span className="inline-block rounded bg-blue-500 px-2 py-1  text-xs  text-white lg:text-sm">
      #{tag}
    </span>
  );
};

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    tags && (
      <div className="mt-2 flex flex-row flex-wrap  justify-between gap-2">
        {tags.map((tag) => (
          <TagListItem key={tag} tag={tag} />
        ))}
      </div>
    )
  );
};

export default TagList;
