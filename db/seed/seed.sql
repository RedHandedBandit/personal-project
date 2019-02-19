CREATE TABLE van_scotty (
    product_id serial primary key,
    product_name varchar(30),
    product_pic text,
    product_price integer not null
); 

create table visor_gang (
    username_id serial integer primary key,
    username varchar(80),
    password varchar(80),
    profile_pic text
)

create table contact (
    cmnt_id serial primary key,
    comment varchar(500),
    date text,
    user_id integer references visor_gang(username_id)
);