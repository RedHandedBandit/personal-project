select c.comment, c.date, vg.first_name, vg.last_name, c.cmnt_id
from visor_gang vg
join contact c 
on vg.username_id = c.user_id;