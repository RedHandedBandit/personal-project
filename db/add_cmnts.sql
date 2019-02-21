insert into contact (
    comment,
    date,
    user_id
) values (
    ${comment},
    ${date},
    ${username_id}
)
returning *;
