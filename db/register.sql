insert into visor_gang (
    first_name,
    last_name,
    email,
    password
) values (
    ${first}, 
    ${last}, 
    ${email}, 
    ${pass}
)
returning first_name, last_name;