insert into contact (
    comment
) values (
    ${comment}
)
returning *;