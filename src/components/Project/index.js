import Button from '../Button';
import Tag from '../Tag';

export default function Project({ name, description, link, tag }) {
  return (
    <a href={link} target="_blank">
      <div className="border rounded border-gray-300 p-4 hover:bg-gray-50">
        <div className="flex justify-between">
          <h3 className="font-bold">
            {name}
          </h3>
          {tag && <Tag>{tag}</Tag>}
        </div>
        <p>{description}</p>
      </div>
    </a>
  );
}