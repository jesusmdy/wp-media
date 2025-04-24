import _ from "lodash";

export const toFilterObject = (
  filters: { label: string; value: any }[],
): Record<string, any> => {
  const obj = new Object();
  _.forEach(filters, (filter) => {
    if (filter.value !== void null) {
      Object.assign(obj, { [filter.label]: filter.value });
    }
  });
  return obj;
};

export const availableFilters = {
  order: {
    label: "order",
    values: [
      {
        label: "Ascending",
        value: "asc",
      },
      {
        label: "Descending",
        value: "desc",
      },
      {
        label: "Default",
        value: "",
      },
    ],
  },
  status: {
    label: "status",
    values: [
      {
        label: "Publish",
        value: "publish",
      },
      {
        label: "Future",
        value: "future",
      },
      {
        label: "Draft",
        value: "draft",
      },
      {
        label: "Pending",
        value: "pending",
      },
      {
        label: "Private",
        value: "private",
      },
      {
        label: "Default",
        value: "inherit",
      },
    ],
  },
  media_type: {
    label: "media_type",
    values: [
      {
        label: "Images",
        value: "image",
      },
      {
        label: "Videos",
        value: "video",
      },
      {
        label: "Any",
        value: "",
      },
    ],
  },
  search: {
    label: "search",
  },
  per_page: {
    label: "per_page",
    values: [
      {
        label: "5 per page",
        value: 5,
      },
      {
        label: "10 per page",
        value: 10,
      },
      {
        label: "25 per page",
        value: 25,
      },
      {
        label: "50 per page",
        value: 50,
      },
      {
        label: "100 per page",
        value: 100,
      },
      {
        label: "Default",
        value: "",
      },
    ],
  },
  orderby: {
    label: "orderby",
    values: [
      {
        label: "None",
        value: "",
      },
      {
        label: "Author",
        value: "author",
      },
      {
        label: "Date",
        value: "date",
      },
      {
        label: "ID",
        value: "id",
      },
      {
        label: "Include",
        value: "include",
      },
      {
        label: "Modified",
        value: "modified",
      },
      {
        label: "Parent",
        value: "parent",
      },
      {
        label: "Relevance",
        value: "relevance",
      },
      {
        label: "Slug",
        value: "slug",
      },
      {
        label: "Include Slugs",
        value: "include_slugs",
      },
      {
        label: "Title",
        value: "title",
      },
    ],
  },
};
