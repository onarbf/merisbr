import {TagIcon} from 'lucide-react'

const category = {
    name: 'category',
    title: 'Categories',
    type: 'document',
    icon: TagIcon,
    fields: [
        {
            name: "name",
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(4).max(32)
        }
    ]
}

export default category;